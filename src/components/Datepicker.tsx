import React from "react";
import type { DatePickerProps } from "antd";
import { DatePicker, Space } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

const { RangePicker } = DatePicker;

const dateFormat = "MM/DD/YYYY";
const weekFormat = "MM/DD";
const monthFormat = "MM/YYYY";

/** Manually entering any of the following formats will perform date parsing */
const dateFormatList = ["MM/DD/YYYY"];

const customFormat: DatePickerProps["format"] = (value) =>
  `custom format: ${value.format(dateFormat)}`;

const customWeekStartEndFormat: DatePickerProps["format"] = (value) =>
  `${dayjs(value).startOf("week").format(weekFormat)} ~ ${dayjs(value)
    .endOf("week")
    .format(weekFormat)}`;

const App: React.FC = () => (
  <Space direction="vertical" size={12}>
    <DatePicker
      defaultValue={dayjs("01/01/2015", dateFormat)}
      format={dateFormat}
    />
    <DatePicker
      defaultValue={dayjs("01/01/2015", dateFormatList[0])}
      format={dateFormatList}
    />
    <DatePicker
      defaultValue={dayjs("01/2015", monthFormat)}
      format={monthFormat}
      picker="month"
    />
    <DatePicker
      defaultValue={dayjs()}
      format={customWeekStartEndFormat}
      picker="week"
    />
    <RangePicker
      defaultValue={[
        dayjs("01/01/2015", dateFormat),
        dayjs("01/01/2015", dateFormat),
      ]}
      format={dateFormat}
    />
    <DatePicker
      defaultValue={dayjs("01/01/2015", dateFormat)}
      format={customFormat}
    />
  </Space>
);

export default App;
