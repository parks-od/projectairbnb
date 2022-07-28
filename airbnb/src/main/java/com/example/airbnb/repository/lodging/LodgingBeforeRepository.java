package com.example.airbnb.repository;

import com.example.airbnb.model.entity.lodging.LodgingBefore;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LodgingBeforeRepository extends JpaRepository <LodgingBefore, Long> {
}
