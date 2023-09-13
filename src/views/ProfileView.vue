<template>
  <div>
    <div>
      <h3>My Profile</h3>
      <hr />
    </div>

    <form>
      <div>
        <div>
          <div>
            <div>
              <h4>Contact detail</h4>

              <div>
                <label>First Name *</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder=""
                  aria-label="First name"
                />
              </div>

              <div>
                <label>Last Name *</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder=""
                  aria-label="Last name"
                />
              </div>

              <div>
                <label>Phone number *</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder=""
                  aria-label="Phone number"
                />
              </div>

              <div>
                <label>Email *</label>
                <input type="email" class="form-control" />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div>
            <h4>Upload your profile photo</h4>
            <div>
              <i class="fas fa-fw fa-user"></i>

              <button type="button" class="btn btn-danger-soft">Upload</button>
              <button type="button" class="btn btn-danger-soft">Remove</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <h4>Social media detail</h4>

          <div>
            <label
              ><i class="fab fa-fw fa-facebook me-2 text-facebook"></i>Facebook
              *</label
            >
            <input
              type="text"
              class="form-control"
              placeholder=""
              aria-label="Facebook"
            />
          </div>

          <div>
            <label
              ><i class="fab fa-fw fa-instagram text-instagram me-2"></i
              >Instagram *</label
            >
            <input
              type="text"
              class="form-control"
              placeholder=""
              aria-label="Instragram"
            />
          </div>
        </div>

        <div>
          <h4>Change Password</h4>

          <div>
            <label>Old password *</label>
            <input type="password" class="form-control" />
          </div>

          <div>
            <label>New password *</label>
            <input type="password" class="form-control" />
          </div>

          <div class="col-md-12">
            <label>Confirm Password *</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword3"
            />
          </div>
        </div>
      </div>

      <div class="profile-edit">
        <button type="button">Delete profile</button>
        <button type="button">Update profile</button>
      </div>
    </form>
  </div>
</template>

<style lang="css">
body {
  margin-top: 20px;
  color: #9b9ca1;
}
.form-control {
  display: block;
  width: 50%;
  margin: auto;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6;
  color: #29292e;
  outline: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #e5dfe4;
  appearance: none;
  border-radius: 5px;
}
.profile-edit {
  margin-top: 20px;
}
</style>
