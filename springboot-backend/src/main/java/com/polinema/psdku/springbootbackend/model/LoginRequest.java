package com.polinema.psdku.springbootbackend.model;

public class LoginRequest {
  private String id; // can be nidn OR admin username
  private String password;

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
}
