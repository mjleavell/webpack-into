import $ from 'jquery';
import 'bootstrap';
import './index.scss';

$('#click-btn').on('click', () => {
  $('#important-text').append('<p>Hello World!</p>');
});
