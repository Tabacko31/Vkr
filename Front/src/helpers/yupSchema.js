import * as yup from 'yup';

export const schema = yup.object().shape({
    email: yup.string().email().required("Заполните поле 'Почта'"),
    password: yup.string()
        .required('Заполните поле "Пароль"')
        .min(6, 'Пароль должен содержать не менее 6 символов'),
});


export const adsSchema = yup.object().shape({
    address: yup.string().required('Адрес обязателен для заполнения'),
    amenities: yup.string(),
    area: yup.number().min(1, 'Сроки выполнения должны быть больше 1'),
    contact_info: yup.string().required('Контактная информация обязательна для заполнения'),
    description: yup.string().required('Описание обязательно для заполнения'),
    photos: yup.string().url('Фото должны быть в формате URL'),
    posting_date: yup.date().nullable(),
    price: yup.number().min(0, 'Цена должна быть больше или равна 0').required('Цена обязательна для заполнения'),
    property_type: yup.string().required('Тип заказа обязателен для заполнения'),
    status: yup.string(),
    title: yup.string().required('Заголовок обязателен для заполнения'),
  });
