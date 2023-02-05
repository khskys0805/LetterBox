package com.proj.letterbox.config;

import com.proj.letterbox.model.Letter;
import com.proj.letterbox.model.LetterBox;
import com.proj.letterbox.model.LetterList;
import com.proj.letterbox.repository.LetterBoxRepository;
import com.proj.letterbox.repository.LetterListRepository;
import com.proj.letterbox.repository.LetterRepository;
import com.proj.letterbox.service.LetterBoxService;
import com.proj.letterbox.service.LetterService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Collections;
import java.util.List;

@Slf4j
//@EnableScheduling
@Component
public class LetterScheduled {
    @Autowired
    private LetterBoxService letterBoxService;
    @Autowired
    private LetterService letterService;
    @Autowired
    private LetterRepository letterRepository;
    @Autowired
    private LetterBoxRepository letterBoxRepository;
    @Autowired
    private LetterListRepository letterListRepository;

    //나중에 cron="0 0 0 * * ?"
    //@Scheduled(cron="0 * * * * ?")
    @Scheduled(cron="0 0 0 * * ?")
    public void LetterCron() {
        Calendar cal1 = Calendar.getInstance();
        Calendar cal2 = Calendar.getInstance();
        //나중에 변경
        cal1.set(2023, 1, 10);
        long dDay = cal1.getTimeInMillis();
        //System.out.println(dDay);
        //long now = System.currentTimeMillis();
        long now = cal2.getTimeInMillis();
        //System.out.println(LocalDate.now());
        long result = dDay - now;
        //System.out.println(result);

        int day = (int) (result / 1000 / 60 / 60 / 24);
        int min = (int) (result / 1000 / 60);
        //System.out.println(min);

        List<LetterBox> letterboxes = letterBoxService.findAll();
        //System.out.println(letterboxes);
        //day >= 0 && day <= 6
        if (day >= 0 && day <= 6) {
            for(LetterBox letterBox : letterboxes) {
                int unopen = 0;
                LetterBox realLB = letterBoxRepository.findByLetterboxId(letterBox.getLetterboxId());
                System.out.println("letterbox : " + realLB.getLetterboxId());
                List<Letter> letters = letterService.findAllByLetterBox(realLB);
                List<Letter> unopenletters = new ArrayList<>();
                for (Letter letter : letters) {
                    System.out.println("letter : " + letter.getLetterId());
                    if (!letter.isOpen()) {
                        unopen++;
                        unopenletters.add(letter);
                    }
                }
                System.out.println("unopen : " + unopen);
                int open = unopen / (day + 1);
                //int open = 1;
                System.out.println("open : " + open);
                Collections.shuffle(unopenletters);
                for (int i = 0; i < open; i++) {
                    try {
                        Letter letter = unopenletters.get(i);
                        letter.setOpen(true);
                        letterRepository.save(letter);
                        LetterList letterList = letterListRepository.findByLetterBoxIdAndLetterId(realLB.getLetterboxId(), letter.getLetterId());
                        letterList.setOpen(true);
                        letterListRepository.save(letterList);
                    } catch (Exception e) {
                        e.printStackTrace();
                    }

                }
            }
        }
    }
}
