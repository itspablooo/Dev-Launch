import SignupForm from "../components/UI/ProfileSections/ProfileForm";


const login = () => {
  return (
    <div className="container pt-4">
      <p>
        This is the login page. You can use this page to log in to your account or sign up.
      </p>
      <section className="features-icons text-center m-4">
        <div 
          className="col-12 col-md-12 mb-3 p-4"
        >
          <h2>Sign Up</h2> 
          <SignupForm />
        </div> 

      </section>    
    </div>
  );
}

export default login;