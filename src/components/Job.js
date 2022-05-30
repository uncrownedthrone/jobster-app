import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa'
import moment from 'moment'

import JobInfo from './JobInfo'
import Wrapper from '../assets/wrappers/Job'

const Job = ({
  _id,
  position,
  company,
  jobLocation,
  jobType,
  createdAt,
  status,
}) => {
  const dispatch = useDispatch()
  const date = moment(createdAt).format('MMM Do, YYYY')

  return (
    <Wrapper>
      <header>
        <div className='main-icon'>{company.charAt(0)}</div>
        <div className='info'>
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
      </header>
      <div className='content'>
        <div className='content-center'>
          <JobInfo icon={<FaLocationArrow />} text={jobLocation} />
          <JobInfo icon={<FaCalendarAlt />} text={date} />
          <JobInfo icon={<FaBriefcase />} text={jobType} />
        </div>
        <footer>
          <div className='actions'>
            <Link
              to='/add-job'
              className='btn edit-btn'
              onClick={() => {
                console.log('edit job')
              }}>
              Edit
            </Link>
            <button
              type='button'
              className='btn delete-btn'
              onClick={() => {
                console.log('delete job')
              }}>
              Delete
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  )
}

export default Job
