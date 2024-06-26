import General from './General';
import * as yup from 'yup';

const TeachersView = ({ Teacher, subjects, students }) => {
  const initialValues = {
    // ... initial values ...
  };

  const onSubmit = (values) => {
    // ... handle form submission ...
  };

  const validationSchema = yup.object({
    // ... Docenti-specific validation schema ...
  });
  //change teachers and teacher information dynamically from previous page
  const teachersName = Teacher ? Teacher.name : '';

  const title = 'Inserisci e modifica docenti';

  return (
    <General
      teachersname={teachersName}
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      title={title}
      Teacher={Teacher}
      subjects={subjects}
      students={students}
    />
  );
};

export default TeachersView;