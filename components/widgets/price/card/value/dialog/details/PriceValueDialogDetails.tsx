/** 1 Node - Modules, Components, Hooks, Icons */
import React from "react";
import {toast} from "sonner";

/** 2 App - Components, Hooks */
import {Dialog} from "@/components/shared/dialog/Dialog";
import {Button} from "@/components/shared/button/Button";
import {Form} from "@/components/shared/form/Form";

/** 3 Entities, Stores, Packages, Enums ... */
import {yup} from "@/packages/yup";
import {obj} from "@/packages/support";
import {yupSupport} from "@/packages/yup/support";


/**
 * @interface CastsButtonsReceptionProps
 */
interface CastsButtonsReceptionProps {
    title: string;
    cast: string;
}

/**
 * @return {React.ReactElement} Сформированный DOM узел.
 */
export const PriceValueDialogDetails: React.FC<CastsButtonsReceptionProps> = ({ title, cast }): React.ReactElement => {
    /**
     * Обновляет персональные атрибуты профиля.
     *
     * @param {object} data Данные формы.
     *
     * @return {void}
     */
    const updateProfileSignature = (data: object): void => {
        toast.promise(new Promise((resolve, reject) => {
            obj.only(data, ['fullname', 'email', 'message']);

            setTimeout(() => {
                reject();
            }, 1000);
        }), {
            loading: 'Отправка заявки...',
            success: 'Заявка успешно отправлена',
            error: 'Упс, неудачная отправка заявки :(',
        });
    }

    return (
        <Dialog>
            <Dialog.Trigger asChild>
                <Button
                    variant="primary"
                    className="w-full"
                    text="sm"
                >
                    Оставить заявку
                </Button>
            </Dialog.Trigger>
            <Dialog.Content className="sm:max-w-sm">
                <Dialog.Header>
                    <Dialog.Title>{title}</Dialog.Title>
                    <Dialog.Description asChild={true}>
                        <div className="flex items-center space-x-2">
                            <p className="font-extrabold">
                                {cast}
                            </p>
                            <p className="text-sm opacity-60">
                                /сеанс
                            </p>
                        </div>
                    </Dialog.Description>
                </Dialog.Header>
                <Dialog.Main className="py-5">
                    <Form
                        className="space-y-5"
                        defaultValues={{ title }}
                        resolver={() => yupSupport.prepareSchemaWithLabels(['firstname', 'lastname'], {
                            fullname: 'Наименование',
                            email: 'Почтовый адрес',
                            message: 'Cообщение',
                            access: 'Персональные данные',
                        }, yup.object({
                            email: yup
                                .string()
                                .email('Это должен быть действительный адрес электронной почты')
                                .required('Требуется указать электронную почту'),
                            fullname: yup
                                .string()
                                .required('Требуется указать как к вам обращаться :)'),
                            privacy: yup.boolean().oneOf([true], 'Требуется подтвердить обработку персональных данных :)'),
                        }))}
                        onSubmit={updateProfileSignature}
                    >
                        {({ formState: { isSubmitting } }) => (
                            <>
                                <div className="space-y-3">
                                    <div className="flex gap-5 w-full">
                                        <Form.Text
                                            label="Наименование"
                                            placeholder="Ф.И.О"
                                            name="fullname"
                                            className="w-full"
                                            withPlaceholder
                                            withLabel
                                        />
                                        <Form.Text
                                            label="Почтовый адресс"
                                            placeholder="zvesda@yandex.ru"
                                            name="email"
                                            className="w-full"
                                            withPlaceholder
                                            withLabel
                                        />
                                    </div>
                                    <Form.Text
                                        label="Cообщение"
                                        placeholder="Тут моглы бы быть ваше пожелания"
                                        name="message"
                                        as="textarea"
                                        className="w-full"
                                        withPlaceholder
                                        withLabel
                                    />
                                    <Form.Checkbox
                                        label="Согласие на обработку персональных данных"
                                        name="privacy"
                                        className="w-full"
                                        withLabel
                                        filled
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    loading={isSubmitting}
                                    disabled={isSubmitting}
                                    size="oblong-1.5"
                                    className="w-40 ml-auto"
                                    variant="primary"
                                >
                                    Записаться
                                </Button>
                            </>
                        )}
                    </Form>
                </Dialog.Main>
            </Dialog.Content>
        </Dialog>
    );
}