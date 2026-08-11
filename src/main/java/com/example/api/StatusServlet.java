package com.example.api;

import com.fasterxml.jackson.databind.ObjectMapper;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.Map;

@WebServlet("/api/status")
public class StatusServlet extends HttpServlet {

    private final ObjectMapper objectMapper = new ObjectMapper();

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("application/json");
        resp.setCharacterEncoding("UTF-8");

        // Enable CORS for development
        resp.setHeader("Access-Control-Allow-Origin", "*");
        resp.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");

        Map<String, Object> responseData = new HashMap<>();
        responseData.put("status", "SUCCESS");
        responseData.put("server", "Apache Tomcat / Java Servlet");
        responseData.put("message", "Tomcat WAS와 React Vite 프론트엔드가 성공적으로 통합 통신되었습니다!");
        responseData.put("timestamp", LocalDateTime.now().format(DateTimeFormatter.ISO_LOCAL_DATE_TIME));
        responseData.put("environment", "Maven + Servlet 4.0 + React 19 + Vite 6 + Tailwind CSS v4");

        PrintWriter out = resp.getWriter();
        out.print(objectMapper.writeValueAsString(responseData));
        out.flush();
    }
}
