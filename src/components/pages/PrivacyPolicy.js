import React, { useContext } from 'react';

import { Context } from '../../Context';
import { meta } from '../../helpers/meta';
import { Heading } from '../Headings';

export default function PrivacyPolicy() {
  const { legal } = useContext(Context);

  document.title = legal.privacyPolicy.meta.title;
  meta('name', 'description', legal.privacyPolicy.meta.description);

  return (
    <article className="wrap">
      <Heading h1 title={legal.privacyPolicy.heading} />

      {legal.privacyPolicy.sections.map((section) => {
        return (
          <section key={section.heading}>
            <Heading h2 title={section.heading} />

            {section.content.map((subSection) => (
              <div
                key={subSection}
                dangerouslySetInnerHTML={{ __html: subSection }}
              />
            ))}
          </section>
        );
      })}

      <p dangerouslySetInnerHTML={{ __html: legal.privacyPolicy.source }} />
    </article>
  );
}
