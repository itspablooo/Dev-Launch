import SignupForm from "../components/UI/ProfileSections/ProfileForm";


const login = () => {
  return (
    <div className="container pt-4">
      <p>
        This is the login page. You can use this page to log in to your account or sign up.
      </p>
      <section className="features-icons bg-light text-center m-4">
        <div 
          className="col-12 col-md-10 mb-3 p-4"
        >
          <h2>Sign Up</h2> 
          <SignupForm />
        </div> 

      </section>

      <section className="features-icons bg-light text-center m-4">
        <div className="container">
          <div className="row p-2">
            <p>This is where you Login to your account.</p>

            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-terminal m-auto text-primary" />
                </div>
                <h3>Easy to Use</h3>
                <p className="lead mb-0">
                  Ready to use with your own content, or customize the source
                  files!
                </p>
              </div>
            </div>


          </div>
        </div>
      </section>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        tenetur maiores, dolor iusto dolorum ullam, natus deleniti blanditiis
        impedit suscipit sed magnam alias in, repellat expedita hic explicabo
        architecto soluta. About us Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Velit voluptate exercitationem quaerat pariatur
        mollitia, excepturi, voluptatem eveniet a dolor nobis ex veniam totam
        nostrum temporibus ad omnis nam rerum eligendi.
      </p>
    </div>
  );
}

export default login;