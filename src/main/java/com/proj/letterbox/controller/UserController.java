package com.proj.letterbox.controller;

import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.net.URI;

@RestController
public class UserController {
    @Value("${KakaoAuthUrl}")
    private String KakaoAuthUrl;

    @Value("${KakaoApiKey}")
    private String KakaoApiKey;

    @Value("${RedirectURI}")
    private String RedirectURI;

    @Value("${KakaoApiUrl}")
    private String KakaoApiUrl;

    @RequestMapping (value = "/login/getKakaoAuthUrl")
    public @ResponseBody String getKakaoAuthUrl(HttpServletRequest request){
            String reqUrl = KakaoAuthUrl + "/oauth/authorize?client_id=" + KakaoApiKey + "&redirect_uri="+ RedirectURI + "&response_type=code";
            return reqUrl;
    }

    @RequestMapping(value = "/login/oauth_kakao")
    public String oauthKakao(HttpServletRequest request, HttpServletResponse response) throws Exception {

        String code = request.getParameter("code");
        String error = request.getParameter("error");
        // 카카오로그인 페이지에서 취소버튼 눌렀을경우
        if (error != null) {
            if (error.equals("access_denied")) {
                return "redirect:/login";
            }
        }

        String accessToken = getAccessToken(request, code);
        String kakaoUniqueNo = getKakaoUniqueNo(accessToken);

        if (kakaoUniqueNo != null && !kakaoUniqueNo.equals("")) {
            /**

             TO DO : 리턴받은 kakaoUniqueNo에 해당하는 회원정보 조회 후 로그인 처리 후 메인으로 이동

             */

            return "redirect:/";

            // 카카오톡 정보조회 실패했을경우
        } else {
            return "카카오톡 정보조회에 실패했습니다.";
        }

    }

    public String getAccessToken(HttpServletRequest request, String code) throws Exception {

        String accessToken = "";

        // restTemplate을 사용하여 API 호출
        RestTemplate restTemplate = new RestTemplate();
        String reqUrl = "/oauth/token";
        URI uri = URI.create(KakaoAuthUrl + reqUrl);

        HttpHeaders headers = new HttpHeaders();

        MultiValueMap<String, Object> parameters = new LinkedMultiValueMap<String, Object>();
        parameters.set("grant_type", "authorization_code");
        parameters.set("client_id", KakaoApiKey);
        parameters.set("redirect_uri", RedirectURI);
        parameters.set("code", code);

        HttpEntity<MultiValueMap<String, Object>> restRequest = new HttpEntity<>(parameters, headers);
        ResponseEntity<JSONObject> apiResponse = restTemplate.postForEntity(uri, restRequest, JSONObject.class);
        JSONObject responseBody = apiResponse.getBody();

        accessToken = (String) responseBody.get("access_token");

        return accessToken;
    }

    public String getKakaoUniqueNo(String accessToken) throws Exception {

        String kakaoUniqueNo = "";

        // restTemplate을 사용하여 API 호출
        RestTemplate restTemplate = new RestTemplate();
        String reqUrl = "/v2/user/me";
        URI uri = URI.create(KakaoApiUrl + reqUrl);

        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "bearer " + accessToken);
        headers.set("KakaoAK", KakaoApiKey);

        MultiValueMap<String, Object> parameters = new LinkedMultiValueMap<String, Object>();
        parameters.add("property_keys", "[\"id\"]");

        HttpEntity<MultiValueMap<String, Object>> restRequest = new HttpEntity<>(parameters, headers);
        ResponseEntity<JSONObject> apiResponse = restTemplate.postForEntity(uri, restRequest, JSONObject.class);
        JSONObject responseBody = apiResponse.getBody();
        kakaoUniqueNo = String.valueOf(responseBody.get("id"));

        return kakaoUniqueNo;

    }

}
