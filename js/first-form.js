document.addEventListener('DOMContentLoaded', function() {
    const firstForm = document.getElementById('firstForm');
    firstForm.addEventListener('submit', firstFormSend);

    async function firstFormSend(e) {
        e.preventDefault();

        let error = formValidate(firstForm);

		const formData = new FormData();
		let firstFormNameField = document.querySelector('#firstFormName');
		let firstFormPhoneField = document.querySelector('#firstFormPhone');
		formData.append('name', firstFormNameField.value);
		formData.append('phone', firstFormPhoneField.value);

        if (error === 0) {
            firstForm.classList.add('_sending');
            let response = await fetch('mail.php', {
                method: 'POST',
				body: formData
            });
            if (response.ok) {
                let result = await response.json();
                alert(result.message);

                firstForm.reset();
                firstForm.classList.remove('_sending');
            } else {
                alert("Ошибка");
                firstForm.classList.remove('_sending');
            }
        } else {
            alert('Заполните обязательные поля');
        }

    }

    function formValidate(firstForm) {
        let error = 0;
        let formReq = document.querySelectorAll('.__req');

        for (let index = 0; index < formReq.length; index++) {
            const formInput = formReq[index];
            formRemoveError(formInput);

            {
                if (formInput.value === '') {
                    formAddError(formInput);
                    error++;
                }
            }
        }
        return error;
    }

    function formAddError(formInput) {
        formInput.parentElement.classList.add('_error');
        formInput.classList.add('_error');
    }

    function formRemoveError(formInput) {
        formInput.parentElement.classList.remove('_error');
        formInput.classList.remove('_error');
    }



});