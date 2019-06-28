
package webadv.example.bean;

public class Manager {
	private String id;
	private String password;
	private String image;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	@Override
	public String toString() {
		return "Manager [id=" + id + ", password=" + password + ", image=" + image + "]";
	}

}
