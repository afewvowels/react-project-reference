import React, { Component } from 'react';

import Question from './Question';
import './FAQ.scss';

class Faq extends Component {
  render() {
    return(
      <section className='faq'>
        <h4 className='faq__heading'>Frequently Asked Questions</h4>
        <article className='faq__container'>
          <Question
            question='Donec elit libero, sodales nec?'
            answer='Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce id purus. Ut varius tincidunt libero. Phasellus dolor. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris.'
          />
          <Question
            question='Pellentesque posuere. Praesent turpis?'
            answer='Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien.'
          />
          <Question
            question='Cum sociis natoque penatibus?'
            answer='Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada.'
          />
          <Question
            question='Sed consequat, leo eget bibendum sodales?'
            answer='Donec venenatis vulputate lorem. Morbi nec metus. Phasellus blandit leo ut odio. Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem.'
          />
        </article>
      </section>
    );
  }
}

export default Faq;
