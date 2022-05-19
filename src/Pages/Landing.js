import { Link } from 'react-router-dom'

import { Logo } from '../components/'
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        {/* info */}
        <div className='info'>
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby single-origin coffee banjo meh, squid hot chicken banh mi
            helvetica swag mumblecore irony salvia vice yr coloring book DSA. Yr
            kombucha ethical chartreuse synth. Gastropub organic +1 unicorn
            normcore try-hard art party.
          </p>
          <Link to='/register' className='btn btn-hero'>
            Login/Register
          </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  )
}

export default Landing
