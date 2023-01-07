package com.proj.letterbox.controller;

import com.proj.letterbox.model.LetterBox;
import com.proj.letterbox.repository.LetterBoxRepository;
import com.proj.letterbox.repository.UserRepository;
import com.proj.letterbox.service.LetterBoxService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/letterbox")
public class LetterBoxController {
    @Autowired
    LetterBoxService letterBoxService;

    //조회
    @ResponseBody
    @GetMapping(value = "/{userIdx}")
    public LetterBox findLetterBoxByUserIdx(@PathVariable("userIdx") int userIdx) {
        return letterBoxService.findLetterBoxByUserIdx(userIdx);
    }
    //생성
    @ResponseBody
    @PostMapping(value = "/{userIdx}")
    public LetterBox saveLetterBox(@PathVariable("userIdx") int userIdx, @RequestBody LetterBox letterBox) {
        return letterBoxService.saveLetterBox(userIdx, letterBox);
    }

}
