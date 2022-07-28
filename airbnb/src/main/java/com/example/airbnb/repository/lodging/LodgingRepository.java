package com.example.airbnb.repository;

import com.example.airbnb.model.entity.lodging.Lodging;
import com.example.airbnb.model.entity.lodging.LodgingRoom;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.swing.text.html.parser.Entity;
import java.util.Optional;

@Repository
public interface LodgingRepository extends JpaRepository<Lodging, Long> {
    @Autowired(required = false)
    Optional<Lodging> findById(Long id);
}
