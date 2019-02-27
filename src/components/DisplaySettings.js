import React from 'react';
import { connect } from 'react-redux';

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
  setAutoplay: autoplay => dispatch({ 
    type: 'SET_AUTOPLAY',
    autoplay
  }),
  setSection: section => dispatch({
    type: 'SET_SECTION',
    section
  }),
  setSort: sort => dispatch({
    type: 'SET_SORT',
    sort
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(DisplaySettings)