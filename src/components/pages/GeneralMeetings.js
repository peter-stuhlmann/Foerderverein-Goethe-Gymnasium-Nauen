import React, { useContext } from 'react';

import { Context } from '../../Context';
import GeneralMeetingsList from '../GeneralMeetingsList';
import GeneralMeetingsContent from '../GeneralMeetingsContent';

export default function GeneralMeetings() {
  const { content, setGeneralMeetingIndex } = useContext(Context);

  switch (window.location.hash) {
    case '':
    case '#2020':
      setGeneralMeetingIndex(3);
      break;
    case '#2019':
      setGeneralMeetingIndex(2);
      break;
    case '#2018':
      setGeneralMeetingIndex(1);
      break;
    case '#2017':
      setGeneralMeetingIndex(0);
      break;
    default:
      setGeneralMeetingIndex('unvalid');
  }

  return (
    <div className="wrap">
      <h1>{content.generalMeetings.heading}</h1>
      <GeneralMeetingsList />
      <GeneralMeetingsContent />
    </div>
  );
}
