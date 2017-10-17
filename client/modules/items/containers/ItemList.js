import ItemList from '../components/ItemList.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('items.list').ready()) {
    const items = Collections.Items.find().fetch();
    const totalItems = Collections.Items.find().count();
    const completedItems = Collections.Items.find({complete: true}).count();
    const percentage = Math.round((completedItems / totalItems) * 100);
    onData(null, {items});
  }
};

export default composeAll(
composeWithTracker(composer),
useDeps()
)(ItemList);
