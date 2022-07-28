package com.example.airbnb.repository;

import com.example.airbnb.model.entity.lodging.LodgingBefore;
import com.example.airbnb.model.entity.lodging.LodgingRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LodgingRoleRepository extends JpaRepository<LodgingRole, Long> {

}
