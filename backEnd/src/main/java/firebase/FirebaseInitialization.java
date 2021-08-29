package firebase;

import java.io.FileInputStream;

import javax.annotation.PostConstruct;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;

public class FirebaseInitialization {
	@PostConstruct
	public void initialization(){

FileInputStream serviceAccount = null;
try {
	serviceAccount = new FileInputStream( "./serviceAccountKey.json");

FirebaseOptions options = new FirebaseOptions.Builder()
  .setCredentials(GoogleCredentials.fromStream(serviceAccount))
  .build();

FirebaseApp.initializeApp(options);
	} catch (Exception e){
		e.printStackTrace();

	}}}


