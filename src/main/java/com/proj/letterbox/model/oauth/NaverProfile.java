package com.proj.letterbox.model.oauth;

import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

@Data
public class NaverProfile {
    private int resultcode;
    private String message;
    private NaverResponse response;

    @Data
    public class NaverResponse {
        public String id;
        public String nickname;
        public String email;
        public String name;
    }
}