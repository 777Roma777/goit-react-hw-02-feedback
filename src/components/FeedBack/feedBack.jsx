import React, { Component } from 'react';
import css from './feedBack.module.css';

export class FeedBack extends Component {
 

    render() {
        const { onLeaveFeedback } = this.props;
        return (
          <div>
            <ul className={css.listFeedBack}>
              <li className={css.itemList}>
                <button
                  type="button" className={css.btnItem}
                  onClick={() => onLeaveFeedback('good')}
                >
                  Good
                </button>
              </li>
              <li className={css.itemList}>
                <button
                  type="button" className={css.btnItem}
                  onClick={() => onLeaveFeedback('neutral')}
                >
                  Neutral
                </button>
              </li>
              <li className={css.itemList}>
                <button type="button" className={css.btnItem} onClick={() => onLeaveFeedback('bad')}>
                  Bad
                </button>
              </li>
            </ul>
          </div>
        );
      }
    }
