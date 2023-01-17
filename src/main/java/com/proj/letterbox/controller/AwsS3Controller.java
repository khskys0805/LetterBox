package com.proj.letterbox.controller;

import com.proj.letterbox.model.Files;
import com.proj.letterbox.service.AwsS3Service;
import com.proj.letterbox.service.FilesService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Arrays;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/s3")
public class AwsS3Controller {
    private final AwsS3Service awsS3Service;
    @Autowired
    FilesService filesService;
    @PostMapping("/file")
    public ResponseEntity<Files> uploadFile(@RequestPart MultipartFile multipartFile) {
        try {
            String filename = awsS3Service.uploadFile(multipartFile);
            String url = awsS3Service.getUrl(filename);
            Files files = new Files(filename, url);
            Files newfile = filesService.save(files);
            return ResponseEntity.ok().body(newfile);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(null);
        }
    }
    @DeleteMapping("/file/{fileIdx}")
    public ResponseEntity<String> deleteFile(@PathVariable("fileIdx") int fileIdx) {
        try {
            Files file = filesService.findByFileId(fileIdx);
            awsS3Service.deleteFile(file.getFilename());
            return ResponseEntity.ok().body("삭제 처리가 완료되었습니다.");
        } catch(Exception e) {
            return ResponseEntity.badRequest().body(null);
        }
    }
    @GetMapping("/file")
    public ResponseEntity<String> getFile(@RequestParam String fileName) {

        String url = awsS3Service.getUrl(fileName).toString();

        return ResponseEntity.ok().body(url);
    }
}
