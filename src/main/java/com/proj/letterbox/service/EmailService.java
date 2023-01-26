package com.proj.letterbox.service;

import com.proj.letterbox.model.EmailMessage;
import com.proj.letterbox.model.Letter;
import com.proj.letterbox.model.LetterBox;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.thymeleaf.context.Context;
import org.thymeleaf.spring5.SpringTemplateEngine;

import javax.mail.internet.MimeMessage;

@Slf4j
@Service
@RequiredArgsConstructor
public class EmailService {
    private final JavaMailSender javaMailSender;
    private final SpringTemplateEngine templateEngine;
    public boolean sendMail(Letter letter, LetterBox letterBox) {
        try {
            MimeMessage mimeMessage = javaMailSender.createMimeMessage();
            Context context = new Context();
            context.setVariable("sender", letter.getName());
            context.setVariable("receiver", letterBox.getName());
            String message = templateEngine.process("sendEmail", context);
            EmailMessage emailMessage = EmailMessage.builder()
                    .to(letter.getUser().getEmail())
                    .subject("[레터박스] 정답을 맞혔습니다!")
                    .message(message)
                    .build();

            MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage, false, "UTF-8");
            mimeMessageHelper.setTo(emailMessage.getTo()); // 메일 수신자
            mimeMessageHelper.setSubject(emailMessage.getSubject()); // 메일 제목
            mimeMessageHelper.setText(emailMessage.getMessage(), true); // 메일 본문 내용, HTML 여부
            javaMailSender.send(mimeMessage);
            log.info("Success!!");
            return true;
        } catch (Exception e) {
            log.info("fail!!");
            throw new RuntimeException(e);
        }
    }
}
