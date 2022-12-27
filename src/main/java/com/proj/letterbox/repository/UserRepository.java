package com.proj.letterbox.repository;

import com.proj.letterbox.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
    public User findByKakaoEmail(String kakaoEmail);
    public User findByUserCode(String userCode);
}

