import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const AddProducts = () => {
  const [value, setValue] = useState([]);
  const DisplayingErrorMessagesSchema = Yup.object().shape({
    ProductName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    price: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    imgLink: Yup.string().min(2, "Too Short!").required("Required"),
  });

  const handleSubmit = (e) => {
    // setValue(e);

    const obj = {
      a: "",
      price: "",
      images: "",
    };

    // obj.name = e.ProductName;    
    obj.price = e.price;
    obj.images = e.imgLink;
    axios.post("http://localhost:3000/prod", obj);
    console.log(obj);
  };

  return (
    <div>
      <div>
        <h1>Displaying Error Messages</h1>
        <Formik
          initialValues={{
            ProductName: "",
            price: "",
            imgLink: "",
          }}
          validationSchema={DisplayingErrorMessagesSchema}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Field name="ProductName" />
              {touched.ProductName && errors.ProductName && (
                <div>{errors.ProductName}</div>
              )}
              <Field name="price" />
              {touched.price && errors.price && <div>{errors.price}</div>}
              <Field name="imgLink" />
              {touched.imgLink && errors.imgLink && <div>{errors.imgLink}</div>}
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddProducts;
