package com.proj.letterbox;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
public class LetterBoxApplication {

    public static void main(String[] args) {
        SpringApplication.run(LetterBoxApplication.class, args);
    }

}
