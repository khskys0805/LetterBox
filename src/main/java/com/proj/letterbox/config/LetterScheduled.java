package com.proj.letterbox.config;

import com.proj.letterbox.model.Letter;
import com.proj.letterbox.model.LetterBox;
import com.proj.letterbox.repository.LetterBoxRepository;
import com.proj.letterbox.repository.LetterRepository;
import com.proj.letterbox.service.LetterBoxService;
import com.proj.letterbox.service.LetterService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.util.Calendar;
import java.util.Collections;
import java.util.List;

@Slf4j
@EnableScheduling
@Component
public class LetterScheduled {
    @Autowired
    private LetterBoxService letterBoxService;
    @Autowired
    private LetterService letterService;
    @Autowired
    private LetterRepository letterRepository;

    //나중에 cron="0 0 0 * * ?"
    @Scheduled(cron="0 * * * * ?")
    public void LetterCron() {
        Calendar cal = Calendar.getInstance();
        //나중에 변경
        cal.set(2023, 2, 1);
        long dDay = cal.getTimeInMillis();
        System.out.println(dDay);
        long now = System.currentTimeMillis();
        System.out.println(now);
        long result = dDay - now;
        System.out.println(result);

        //int day = (int) (result / 1000 / 60 / 60 / 24);
        int min = (int) (result / 1000 / 60);

        List<LetterBox> letterboxes = letterBoxService.findAll();
        //day >= 0 && day <= 6
        if (min >= 0 && min <= 4320) {
            for(LetterBox letterBox : letterboxes) {
                int unopen = 0;
                List<Letter> letters = letterService.findAllByLetterBox(letterBox);
                for (Letter letter : letters) {
                    if (!letter.isOpen()) {
                        unopen++;
                    }
                }
                //int open = unopen / (day + 1);
                int open = 2;
                Collections.shuffle(letters);
                for (int i = 0; i < open; i++) {
                    Letter letter = letters.get(i);
                    letter.setOpen(true);
                    letterRepository.save(letter);
                    System.out.println(letter.isOpen());
                }
            }
        }
    }
}
