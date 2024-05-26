import General from './General';
import * as yup from 'yup';

const TeachersView = () => {
  const initialValues = {
    // ... initial values ...
  };

  const onSubmit = (values) => {
    // ... handle form submission ...
  };

  const validationSchema = yup.object({
    // ... Docenti-specific validation schema ...
  });

  const title = 'Inserisci e modifica docenti';

  return (
    <General
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      title={title}
    />
  );
};
export default TeachersView;