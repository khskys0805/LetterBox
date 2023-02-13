package com.proj.letterbox.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.mysql.cj.protocol.Message;
import com.proj.letterbox.config.jwt.JwtProperties;
import com.proj.letterbox.model.User;
import com.proj.letterbox.model.oauth.OauthToken;
import com.proj.letterbox.service.UserService;
import org.apache.tomcat.util.http.parser.Authorization;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.net.URI;
import java.util.UUID;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    private static Logger logger = LoggerFactory.getLogger(UserController.class);
    @Value("${KakaoAuthUrl}")
    private String KakaoAuthUrl;

    @Value("${KakaoApiKey}")
    private String KakaoApiKey;

    @Value("${RedirectURI}")
    private String RedirectURI;

    @Value("${KakaoApiUrl}")
    private String KakaoApiUrl;

    @Value("${NaverAuthUrl}")
    private String NaverAuthUrl;

    @Value("${NaverClientId}")
    private String NaverClientId;

    @Value("${NaverClientSecret}")
    private String NaverClientSecret;

    @Value("${NaverRedirectURI}")
    private String NaverRedirectURI;

    @RequestMapping (value = "/login/getKakaoAuthUrl")
    public @ResponseBody String getKakaoAuthUrl(HttpServletRequest request){
        String reqUrl = KakaoAuthUrl + "/oauth/authorize?client_id=" + KakaoApiKey + "&redirect_uri="+ RedirectURI + "&response_type=code";
        return reqUrl;
    }
    private String generateRandomString() {
        return UUID.randomUUID().toString();
    }

    @RequestMapping (value = "/login/getNaverAuthUrl")
    public String getNaverAuthUrl(HttpServletRequest request) {
        String state = generateRandomString();
        request.getSession().setAttribute("state", state);
        String reqUrl = NaverAuthUrl + "?response_type=code&client_id=" + NaverClientId + "&state=" + state + "&redirect_uri=" + NaverRedirectURI;
        return reqUrl;
    }

    @GetMapping("/login/oauth_naver")
    public ResponseEntity getLoginNaver(HttpServletRequest request, @RequestParam("code") String code, @RequestParam("state") String state) {
        String sessionState = (String) request.getSession().getAttribute("state");
        if (StringUtils.pathEquals(sessionState, state)) {
            OauthToken oauthToken = userService.getNaverAccessToken(code);
            System.out.println(oauthToken);
            String jwtToken = userService.saveNaverUserAndGetToken(oauthToken.getAccess_token());
            HttpHeaders headers = new HttpHeaders();
            headers.add(JwtProperties.HEADER_STRING, JwtProperties.TOKEN_PREFIX + jwtToken);
            //JWT 가 담긴 헤더와 200 ok 스테이터스 값, "success" 라는 바디값을 ResponseEntity 에 담아 프론트 측에 전달한다.
            return ResponseEntity.ok().headers(headers).body(null);
        }
        return null;
    }

    // 프론트에서 인가코드 받아오는 url
    @GetMapping("/login/oauth_kakao")
    public ResponseEntity getLogin(@RequestParam("code") String code) {
        // 넘어온 인가 코드를 통해 access_token 발급
        OauthToken oauthToken= userService.getAccessToken(code);
        // 발급 받은 accessToken 으로 카카오 회원 정보 DB 저장 후 JWT 를 생성
        //UserService 의 기존 SaveUser 메소드를 수정한다
        String jwtToken = userService.saveUserAndGetToken(oauthToken.getAccess_token());
        //응답 헤더의 Authorization 이라는 항목에 JWT 를 넣어준다.
        HttpHeaders headers = new HttpHeaders();
        headers.add(JwtProperties.HEADER_STRING, JwtProperties.TOKEN_PREFIX + jwtToken);
        //JWT 가 담긴 헤더와 200 ok 스테이터스 값, "success" 라는 바디값을 ResponseEntity 에 담아 프론트 측에 전달한다.
        return ResponseEntity.ok().headers(headers).body(null);
    }

    @GetMapping("/me")
    public ResponseEntity<Object> getCurrentUser(HttpServletRequest request) {
        User user = userService.getUser(request);
        return ResponseEntity.ok().body(user);
    }

}