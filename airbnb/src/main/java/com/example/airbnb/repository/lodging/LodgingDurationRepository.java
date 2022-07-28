package com.example.airbnb.repository;

import com.example.airbnb.model.entity.lodging.LodgingBefore;
import com.example.airbnb.model.entity.lodging.LodgingDuration;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LodgingDurationRepository extends JpaRepository<LodgingDuration, Long> {
}
