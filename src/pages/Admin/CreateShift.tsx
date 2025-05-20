import { Formik, Form } from "formik";
import * as yup from "yup";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { FormikSelect } from "../../components/FormikSelect";
import { FormikTextField } from "../../components/FormikTextField";
import { axiosInstance } from "../../utils/axiosInstance";
import { Toast } from "../../components/Toast";
import { useEffect, useState } from "react";

interface timings {
  label: string;
  value: string;
}
interface Staff {
  label: string;
  value: string;
}
export const CreateShift = () => {
  const [staff, setStaff] = useState<Staff[]>([]);
  const [timings, setTimings] = useState<timings[]>([]);
  const InitialValues = {
    staff: "",
    shiftTime: "",
    date: null,
  };

  const validationSchema = yup.object({
    // name: yup.string().required("Name is required"),
    staff: yup.string().required("Name is required"),
    shiftTime: yup.string().required("ShiftTime is required"),
    date: yup.date().required("Date is required"),
    // email: yup
    //   .string()
    //   .email("Inavalid email format")
    //   .required("Email is a required field"),
    // gender: yup.string().required("Gender is required"),
    // terms: yup.bool().oneOf([true], "You mustaccept the terms"),
    // subscription: yup.array().min(1, "Select at least one option"),
  });

  const fetchDetails = async () => {
    const response = await axiosInstance.get(
      "http://localhost:3007/api/v1/get-details-shift-creation"
    );
    console.log(response);

    setStaff(response.data.data.staff);
    setTimings(response.data.data.shifts);
  };
  useEffect(() => {
    fetchDetails();
  }, []);
  const onSubmit = async (
    values: any,
    { resetForm }: { resetForm: () => void }
  ) => {
    try {
      <Toast
        openSnackBar={true}
        message="Successfully created"
        severityType="success"
      />;

      resetForm();
    } catch (error) {
      console.error("Error submitting shift details:", error);
      <Toast
        openSnackBar={true}
        message="Error happend"
        severityType="error"
      />;
    } finally {
      console.log("Submission attempt finished.");
    }
  };
  console.log(staff, timings);

  return (
    <div>
      <Formik
        initialValues={InitialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <Box sx={{ maxWidth: 400, margin: "0 auto" }}>
            <FormikSelect name="staff" label="Staff" options={staff} />
            <FormikSelect
              name="shiftTime"
              label="ShiftTime"
              options={timings}
            />
            {/* <FormikDatePicker name="date" label="Select Date" /> */}
            <FormikTextField type="date" label="Date" name="date" focused />
            <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
              Submit
            </Button>
          </Box>
        </Form>
      </Formik>
    </div>
  );
};
