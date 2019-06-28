
package webadv.example.controller;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import webadv.example.bean.CourseDesign;
import webadv.example.bean.Teacher;
import webadv.example.pository.CourseDesignRepository;
import webadv.example.session.SessionCheck;

@Controller
public class CourseDesignDo {
	@Autowired
	CourseDesignRepository courseDesign_c;
	@Autowired
	SessionCheck sessionCheck;
	
	/*
	 * author:王迅 programmer: courseDesign,write_time return String page
	 */
	@RequestMapping(value = "/courseDesign_add_do")
	public String courseDesignAdd(HttpSession session, HttpServletResponse response, CourseDesign courseDesign)
			throws IOException {
		System.out.println("courseDesign_add------------------------------------");
		response.setContentType("text/html;charset=utf-8");
		PrintWriter out = response.getWriter();

		System.out.println(courseDesign);
		
		if (!sessionCheck.sessionCheck_teacher(session)) {
			System.out.println("go");
			out.println("<script>");
			out.println("window.alert('教师未登录或登录失效!') ");
			out.println("window.top.location.href='/'");
			out.println("</script>");
			System.out.println("to");
			return "login";
		}

		Teacher te = (Teacher) session.getAttribute("TeacherUser");
		System.out.println(te);

		int result = courseDesign_c.addCourseDesign(courseDesign);
		if (result > 0) {
			out.println("<script> window.alert('课设题目提交成功!') </script>");
		} else {
			out.println("<script> window.alert('课设题目提交失败!') </script>");
		}

		return "courseDesign_add";
	}

}
