const AboutPage = () => {
  return (
    <div className="container pt-4">
      <h3>About Us:</h3>
      <p>
      Revolutionizing Tech Innovation through Collective Support
      Welcome to Dev-Launch, where innovation meets collaboration! We are a cutting-edge crowdfunding tech platform that empowers aspiring tech visionaries to bring their groundbreaking ideas to life with the support of a global community.
      </p>

      <h3>Our Mission: Fostering Innovation Together</h3>
      <p>
      At Dev-Launch, we believe that innovation should not be hindered by financial constraints. Our mission is to democratize the tech industry by providing a platform where creators, developers, and inventors can showcase their projects and receive the financial backing they need to turn their dreams into reality.
      </p>

      <h3>How It Works: Bridging Dreams and Backers</h3>
      <p>
      Our platform operates on the principle of collective support. Creators present their tech projects, from groundbreaking apps to revolutionary gadgets, and backers from around the world contribute financially to bring these ideas to fruition. It's more than just funding; it's a community-driven effort to shape the future of technology.
      </p>



      <section className="features-icons  text-center m-4">
        <div className="container">
          <div className="row p-2">
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-window m-auto text-primary" />
                </div>
                <h3>Diverse Range of Projects:</h3>
                <p className="lead mb-0">
                Explore a wide array of tech projects, from artificial intelligence and robotics to sustainable tech and gaming. There's something for every tech enthusiast.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-layers m-auto text-primary" />
                </div>
                <h3>Global Community: </h3>
                <p className="lead mb-0">
                Join a vibrant community of backers and creators from diverse backgrounds. Connect, collaborate, and be part of the tech revolution together.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-terminal m-auto text-primary" />
                </div>
                <h3>Transparency and Trust: </h3>
                <p className="lead mb-0">
                We prioritize transparency in every step. Creators provide detailed project plans, and backers can track the progress of funded projects. Trust is the foundation of our platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <h3>Join Us in Shaping the Future!</h3>
      <p>
      Whether you're a tech innovator with a groundbreaking idea or a passionate supporter of cutting-edge projects, Dev-Launch welcomes you to join our community. Together, let's redefine what's possible in the world of technology.

      Innovation knows no boundaries, and at Dev-Launch, we are breaking down the barriers that stand in its way. Join us on this exciting journey towards a future shaped by collective imagination and technological brilliance.

      </p>
    </div>
  );
}

export default AboutPage;