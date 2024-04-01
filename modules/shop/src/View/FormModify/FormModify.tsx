import { InputField, SelectField, Button, CheckboxField, Paragraph, EMode, EVariant } from '@library/kit';

import React from 'react';
import { observer } from 'mobx-react';
import { Formik, Form, FormikHelpers } from 'formik';

import { IShop } from '../../shop.types.ts';
import { context } from '../../shop.context.ts';

import s from './default.module.scss';

interface IProps {
  shop: any;
  onSubmit(value: IShop, helper: FormikHelpers<IShop>): void;
}

export const FormModify: React.FC<IProps> = observer((props) => {
  const { controller } = React.useContext(context);
  const companyList = controller.company;

  return (
    <Formik enableReinitialize={true} initialValues={props.shop} onSubmit={props.onSubmit}>
      {({ dirty, values }) => (
        <Form className={s.wrapper}>
          <div className={s.row}>
            <SelectField
              label={'Компания'}
              name={'company.uuid'}
              optionKey={'uuid'}
              optionValue={'name'}
              options={companyList}
            />
          </div>
          <div className={s.row}>
            <InputField label={'Название'} name={'name'} />
          </div>
          <div className={s.row}>
            <InputField label={'Адрес'} name={'address'} />
          </div>
          {values.uuid && (
            <div className={s.row}>
              <CheckboxField name={'isActive'}>
                <Paragraph>вктивный</Paragraph>
              </CheckboxField>
            </div>
          )}
          <div className={s.row}>
            {dirty && (
              <Button type={'reset'} variant={EVariant.SECONDARY} disabled={!dirty}>
                Сбросить
              </Button>
            )}
            <Button type={'submit'} mode={EMode.SUCCESS} disabled={!dirty}>
              Сохранить
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
});
