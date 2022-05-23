package com.manage.hospitalmanagement;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.manage.hospitalmanagement.controller.DoctorController;
import com.manage.hospitalmanagement.model.Doctor;
import com.manage.hospitalmanagement.model.Patient;
import com.manage.hospitalmanagement.service.DoctorService;
import org.junit.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

@RunWith(SpringRunner.class)
@WebMvcTest(value = DoctorController.class)

public class DoctorControllerTest {
    @Autowired
    private MockMvc mockmvc;

    @MockBean
    private DoctorService docservice;

    @Test
    public void testCreateDoctor() throws Exception {
        Doctor mockdoctor = new Doctor();
        mockdoctor.setDid(1);
        mockdoctor.setName("Dr.A.K.Laha");
        mockdoctor.setAge(45);
        mockdoctor.setGender("Male");
        mockdoctor.setSpecialist("Surgeon");

        String inputInJson = this.mapToJson(mockdoctor);
        String uri = "/doctor";
        Mockito.when(docservice.createDoctor(Mockito.any(Doctor.class))).thenReturn(mockdoctor);

        RequestBuilder requestBuilder = MockMvcRequestBuilders
                .post(uri)
                .accept(MediaType.APPLICATION_JSON).content(inputInJson)
                .contentType(MediaType.APPLICATION_JSON);

        MvcResult result = mockmvc.perform(requestBuilder).andReturn();
        MockHttpServletResponse response = result.getResponse();

        String outputInJson = response.getContentAsString();
        System.out.println(outputInJson);

        assertEquals(outputInJson, inputInJson);

        assertEquals(HttpStatus.CREATED.value(), response.getStatus());
    }

    @Test
    public void testGetDoctor() throws Exception {
        Doctor mockdoctor = new Doctor();
        mockdoctor.setDid(1);
        mockdoctor.setName("Dr.A.K.Laha");
        mockdoctor.setAge(45);
        mockdoctor.setGender("Male");
        mockdoctor.setSpecialist("Surgeon");
        String expectedJson = this.mapToJson(mockdoctor);
        Mockito.when(docservice.getInformation((Mockito.anyString()))).thenReturn(mockdoctor);
        String uri = "/doctor/Dr.A.K.Laha";
        RequestBuilder requestBuilder = MockMvcRequestBuilders.get(uri).accept(
                MediaType.APPLICATION_JSON);
        MvcResult result = mockmvc.perform(requestBuilder).andReturn();
        String outputInJson = result.getResponse().getContentAsString();
        System.out.println(outputInJson);
        assertEquals(outputInJson, expectedJson);

    }

    @Test
    public void testGetAllDoctors() throws Exception {
        Doctor mockdoctor = new Doctor();
        mockdoctor.setDid(1);
        mockdoctor.setName("Dr.A.K.Laha");
        mockdoctor.setAge(45);
        mockdoctor.setGender("Male");
        mockdoctor.setSpecialist("Surgeon");

        Doctor mockdoctor1 = new Doctor();
        mockdoctor1.setDid(2);
        mockdoctor1.setName("Dr.B.Sharma");
        mockdoctor1.setAge(38);
        mockdoctor1.setGender("Female");
        mockdoctor1.setSpecialist("General Physician");
        List<Doctor> doctorList = new ArrayList<>();
        doctorList.add(mockdoctor);
        doctorList.add(mockdoctor1);

        Mockito.when(docservice.getAllDoctor()).thenReturn(doctorList);
        String uri = "/doctor";

        RequestBuilder requestBuilder = MockMvcRequestBuilders.get(uri).accept(MediaType.APPLICATION_JSON);
        MvcResult result = mockmvc.perform(requestBuilder).andReturn();
        String expectedJson = this.mapToJson(doctorList);
        String outputInJson = result.getResponse().getContentAsString();
        System.out.println(outputInJson);
        assertEquals(outputInJson, expectedJson);

    }

    private String mapToJson(Object object) throws JsonProcessingException {
        ObjectMapper objectMapper = new ObjectMapper();
        return objectMapper.writeValueAsString(object);
    }

}