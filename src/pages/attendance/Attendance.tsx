import * as React from 'react'
import { motion } from "framer-motion";
import { DatePicker, Form, Select } from "antd"

const Attendance = () => {
  return (
    <main className="container mx-auto my-8 px-4 lg:px-8">
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className=" py-8 rounded-md flex flex-col md:flex-row md:justify-between gap-4 w-full">
          {/* Left Title & Description */}
          <div>
            <h2 className="text-salic font-semibold text-base md:text-lg mb-2">
              HR Employee Attendance Dashboard
            </h2>
            <p className="text-sm text-gray-500 m-0">
              Monitor employee check-ins, departures, and attendance patterns.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col items-start md:items-end gap-4">
            <Form.Item name="date" label={<span className="text-salic">Date</span>} colon={false} className='!mb-0'>
              <DatePicker.RangePicker allowClear={false} className='w-64' />
            </Form.Item>

            <Form.Item name="sector" label={<span className="text-salic">Target Entities</span>} colon={false} className='!mb-0'>
              <Select
                className="min-w-32"
                placeholder="Select Sector"
                options={[
                  { value: 'strategy', label: 'Strategy' },
                  { value: 'finance', label: 'Finance' },
                  { value: 'hr', label: 'HR' },
                  { value: 'operations', label: 'Operations' },
                ]}
              />
            </Form.Item>
          </div>
        </motion.div>
      </div>
    </main>
  )
}

export default Attendance