import { Link } from 'react-router-dom';
const HomepageText = () => {
  return (
    <div>
      <div className="container mt-5">
          <div className="row justify-content-center">
              <div className="col-md-8">
                  <div className="card p-4 shadow">
                      <h2 className="text-center mb-4">Welcome to Our Platform</h2>
                      <p className="text-muted">
                          At Dev-Launch, we're not just a crowdfunding platform; we're the nexus of tech dreams, where groundbreaking ideas find wings and passionate backers make innovation a reality. Explore the forefront of technology as we present a curated selection of diverse projects that are redefining the future.
                      </p>
                      <p className="text-muted">
                      Dive into a world of innovation where every project is a testament to human creativity and technological prowess. From cutting-edge AI applications to eco-friendly tech solutions and immersive gaming experiences, our platform is a showcase of the brightest minds in the tech landscape.
                      </p>
                      <p className="text-muted">
                          Join our community today and be a part of the tech revolution. Back projects, connect with like-minded individuals, and together, let's shape the future of technology.
                      </p>
                      <p className="text-muted text-center mt-4">
                          <Link key={3} className=' btn btn-primary' to="/login">
                            Get Started 
                          </Link>
                      </p>
                  </div>
              </div>
          </div>
      </div>

    </div>
  );
}

export default HomepageText;