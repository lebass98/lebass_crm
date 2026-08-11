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
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@WebServlet("/api/admin/data")
public class AdminServlet extends HttpServlet {

    private final ObjectMapper objectMapper = new ObjectMapper();

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("application/json");
        resp.setCharacterEncoding("UTF-8");

        // CORS headers
        resp.setHeader("Access-Control-Allow-Origin", "*");
        resp.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");

        Map<String, Object> result = new HashMap<>();
        
        // System Metrics
        Map<String, Object> metrics = new HashMap<>();
        metrics.put("totalUsers", 1284);
        metrics.put("activeSessions", 342);
        metrics.put("todayRequests", "48.2k");
        metrics.put("serverStatus", "HEALTHY");
        metrics.put("uptime", "99.98%");
        metrics.put("cpuUsage", "14.2%");
        metrics.put("memoryUsage", "42.8%");

        // User Management Table Data
        List<Map<String, Object>> users = new ArrayList<>();
        users.add(createUser(1, "홍길동", "admin@example.com", "Super Admin", "ACTIVE", "2026-01-15"));
        users.add(createUser(2, "김철수", "chulsoo@example.com", "Manager", "ACTIVE", "2026-02-01"));
        users.add(createUser(3, "이영희", "younghee@example.com", "User", "INACTIVE", "2026-03-12"));
        users.add(createUser(4, "박민수", "minsu@example.com", "Editor", "ACTIVE", "2026-04-05"));
        users.add(createUser(5, "정수진", "sujin@example.com", "User", "PENDING", "2026-07-20"));
        users.add(createUser(6, "최태양", "taeyang@example.com", "Manager", "ACTIVE", "2026-08-02"));

        result.put("status", "SUCCESS");
        result.put("timestamp", LocalDateTime.now().format(DateTimeFormatter.ISO_LOCAL_DATE_TIME));
        result.put("metrics", metrics);
        result.put("users", users);

        PrintWriter out = resp.getWriter();
        out.print(objectMapper.writeValueAsString(result));
        out.flush();
    }

    private Map<String, Object> createUser(int id, String name, String email, String role, String status, String joinedAt) {
        Map<String, Object> user = new HashMap<>();
        user.put("id", id);
        user.put("name", name);
        user.put("email", email);
        user.put("role", role);
        user.put("status", status);
        user.put("joinedAt", joinedAt);
        return user;
    }
}
