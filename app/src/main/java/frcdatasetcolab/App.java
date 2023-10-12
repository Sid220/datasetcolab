/*
 * This Java source file was generated by the Gradle 'init' task.
 */
package frcdatasetcolab;

import io.javalin.Javalin;
import io.javalin.util.FileUtil;
import io.javalin.http.UploadedFile;
import java.text.SimpleDateFormat;
import java.util.Date;


public class App {
    public static void main(String[] args) {
        Javalin app = Javalin.create(config -> {
            config.plugins.enableCors(cors -> {
                cors.add(corsConfig -> {
                    //replacement for enableCorsForAllOrigins()
                    corsConfig.anyHost();
                });
            });
        })
            .get("/", ctx -> ctx.result("Hello World"))
            .start(7070);
        
        app.post("/upload", ctx -> {
            Date date = new Date();
            SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd_HH:mm");
            String formattedDate = dateFormat.format(date);
            ctx.uploadedFiles("files").forEach(uploadedFile ->
                FileUtil.streamToFile(uploadedFile.content(), "upload/" + formattedDate + '_' + uploadedFile.filename())); // uploadedFile.filename()
        });
    }
    
}

/* 
public class App {
    public String getGreeting() {
        return "Hello World!";
    }

    public static void main(String[] args) {
        System.out.println(new App().getGreeting());
    }
}
*/