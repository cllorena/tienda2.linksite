/**
 * Kunena Component
 * @package Kunena.Template.Crypsis
 *
 * @copyright     Copyright (C) 2008 - 2021 Kunena Team. All rights reserved.
 * @license https://www.gnu.org/copyleft/gpl.html GNU/GPL
 * @link https://www.kunena.org
 **/
;(function($){
	var Joomla = window.Joomla;
	if (Joomla !== undefined) {
		$.fn.datepicker.dates['kunena'] = {
			days: [Joomla.JText._('COM_KUNENA_BOOTSTRAP_DATEPICKER_DAYS_SUNDAY'), Joomla.JText._('COM_KUNENA_BOOTSTRAP_DATEPICKER_DAYS_MONDAY'), Joomla.JText._('COM_KUNENA_BOOTSTRAP_DATEPICKER_DAYS_TUESDAY'), Joomla.JText._('COM_KUNENA_BOOTSTRAP_DATEPICKER_DAYS_WEDNESDAY'), Joomla.JText._('COM_KUNENA_BOOTSTRAP_DATEPICKER_DAYS_THURSDAY'), Joomla.JText._('COM_KUNENA_BOOTSTRAP_DATEPICKER_DAYS_FRIDAY'), Joomla.JText._('COM_KUNENA_BOOTSTRAP_DATEPICKER_DAYS_SATURDAY')],
			daysShort: [Joomla.JText._('COM_KUNENA_BOOTSTRAP_DATEPICKER_DAYSSHORT_SUNDAY'), Joomla.JText._('COM_KUNENA_BOOTSTRAP_DATEPICKER_DAYSSHORT_MONDAY'), Joomla.JText._('COM_KUNENA_BOOTSTRAP_DATEPICKER_DAYSSHORT_TUESDAY'), Joomla.JText._('COM_KUNENA_BOOTSTRAP_DATEPICKER_DAYSSHORT_WEDNESDAY'), Joomla.JText._('COM_KUNENA_BOOTSTRAP_DATEPICKER_DAYSSHORT_THURSDAY'), Joomla.JText._('COM_KUNENA_BOOTSTRAP_DATEPICKER_DAYSSHORT_FRIDAY'), Joomla.JText._('COM_KUNENA_BOOTSTRAP_DATEPICKER_DAYSSHORT_SATURDAY')],
			daysMin: [Joomla.JText._('COM_KUNENA_BOOTSTRAP_DATEPICKER_DAYSMIN_SUNDAY'), Joomla.JText._('COM_KUNENA_BOOTSTRAP_DATEPICKER_DAYSMIN_MONDAY'), Joomla.JText._('COM_KUNENA_BOOTSTRAP_DATEPICKER_DAYSMIN_TUESDAY'), Joomla.JText._('COM_KUNENA_BOOTSTRAP_DATEPICKER_DAYSMIN_WEDNESDAY'), Joomla.JText._('COM_KUNENA_BOOTSTRAP_DATEPICKER_DAYSMIN_THURSDAY'), Joomla.JText._('COM_KUNENA_BOOTSTRAP_DATEPICKER_DAYSMIN_FRIDAY'), Joomla.JText._('COM_KUNENA_BOOTSTRAP_DATEPICKER_DAYSMIN_SATURDAY')],
			months: [Joomla.JText._('COM_KUNENA_BOOTSTRAP_DATEPICKER_MONTHS_JANUARY'), Joomla.JText._('COM_KUNENA_BOOTSTRAP_DATEPICKER_MONTHS_FEBRUARY'), Joomla.JText._('COM_KUNENA_BOOTSTRAP_DATEPICKER_MONTHS_MARCH'), Joomla.JText._('COM_KUNENA_BOOTSTRAP_DATEPICKER_MONTHS_APRIL'), Joomla.JText._('COM_KUNENA_BOOTSTRAP_DATEPICKER_MONTHS_MAY'), Joomla.JText._('COM_KUNENA_BOOTSTRAP_DATEPICKER_MONTHS_JUNE'), Joomla.JText._('COM_KUNENA_BOOTSTRAP_DATEPICKER_MONTHS_JULY'), Joomla.JText._('COM_KUNENA_BOOTSTRAP_DATEPICKER_MONTHS_AUGUST'), Joomla.JText._('COM_KUNENA_BOOTSTRAP_DATEPICKER_MONTHS_SEPTEMBER'), Joomla.JText._('COM_KUNENA_BOOTSTRAP_DATEPICKER_MONTHS_OCTOBER'), Joomla.JText._('COM_KUNENA_BOOTSTRAP_DATEPICKER_MONTHS_NOVEMBER'), Joomla.JText._('COM_KUNENA_BOOTSTRAP_DATEPICKER_MONTHS_DECEMBER')],
			monthsShort: [Joomla.JText._('COM_KUNENA_BOOTSTRAP_DATEPICKER_MONTH_SHORT_JANUARY'), Joomla.JText._('COM_KUNENA_BOOTSTRAP_DATEPICKER_MONTH_SHORT_FEBRUARY'), Joomla.JText._('COM_KUNENA_BOOTSTRAP_DATEPICKER_MONTH_SHORT_MARCH'), Joomla.JText._('COM_KUNENA_BOOTSTRAP_DATEPICKER_MONTH_SHORT_APRIL'), Joomla.JText._('COM_KUNENA_BOOTSTRAP_DATEPICKER_MONTH_SHORT_MAY'), Joomla.JText._('COM_KUNENA_BOOTSTRAP_DATEPICKER_MONTH_SHORT_JUNE'), Joomla.JText._('COM_KUNENA_BOOTSTRAP_DATEPICKER_MONTH_SHORT_JULY'), Joomla.JText._('COM_KUNENA_BOOTSTRAP_DATEPICKER_MONTH_SHORT_AUGUST'), Joomla.JText._('COM_KUNENA_BOOTSTRAP_DATEPICKER_MONTH_SHORT_SEPTEMBER'), Joomla.JText._('COM_KUNENA_BOOTSTRAP_DATEPICKER_MONTH_SHORT_OCTOBER'), Joomla.JText._('COM_KUNENA_BOOTSTRAP_DATEPICKER_MONTH_SHORT_NOVEMBER'), Joomla.JText._('COM_KUNENA_BOOTSTRAP_DATEPICKER_MONTH_SHORT_DECEMBER')],
			today: Joomla.JText._('COM_KUNENA_BOOTSTRAP_DATEPICKER_TODAY'),
			monthsTitle: Joomla.JText._('COM_KUNENA_BOOTSTRAP_DATEPICKER_MONTHS_TITLE'),
			clear: Joomla.JText._('COM_KUNENA_BOOTSTRAP_DATEPICKER_CLEAR'),
			weekStart: 1,
			format: "dd/mm/yyyy"
		};
	}
}(jQuery));
