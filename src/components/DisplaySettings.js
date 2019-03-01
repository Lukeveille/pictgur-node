import React from 'react';
import { connect } from 'react-redux';
import { setAutoplay, setSection, setSort } from '../actions';

const DisplaySettings = ({
  section,
  sort,
  autoplay,
  setAutoplay,
  setSection,
  setSort
}) => {
  const sections = ['hot', 'top', 'user'];
  const sorts = ['viral', 'top', 'time'];
  return (
    <div>
      <button onClick={() => { setAutoplay(!autoplay) }}>AUTOPLAY{autoplay? ' ON' : ' OFF'}</button>
      <select value={section} onChange={e => { setSection(e.target.value) }}>
        {sections.map(section => (
          <option key={section} value={section}>{section}</option>
        ))}
      </select>
      <select value={sort} onChange={e => { setSort(e.target.value) }}>
        {sorts.map(sort => (
          <option key={sort} value={sort}>{sort}</option>
        ))}
      </select>
    </div>
  )
}

const mapStateToProps = state => ({
  ...state,
  section: state.section,
  sort: state.sort,
  autoplay: state.autoplay
})
const mapDispatchToProps = dispatch => ({
  setAutoplay: autoplay => dispatch(setAutoplay(autoplay)),
  setSection: section => dispatch(setSection(section)),
  setSort: sort => dispatch(setSort(sort))
});

export default connect(mapStateToProps, mapDispatchToProps)(DisplaySettings)