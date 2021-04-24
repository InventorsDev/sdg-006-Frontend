<template>
    <div>
        <div class="card">
            <div class=""><img src="../../assets/img/confirmEmailLogo.png" alt=""></div>
            <div class="card-body">
                <h5 class="card-title">Hi Joy</h5>
                <p class="card-text">
                    You are one step away from contacting a doctor, To continue please confirm your email address by clicking on the button below
                </p>
                <button type="button" class="btn btn-purplist">Confirm email address</button>
                <p>Thanks,</p>
                <span>MedHouse</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ConfirmEmail'
}
</script>

<style scoped>

    .card{
        width: 51%;
        height: 449px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.15);
        padding-top: 2.7rem;
        padding-left:1.5rem;
    }

    div > img{
        image-rendering: pixelated;
        padding-left: 1rem;
    }

    .card .card-title{
        color: var(--black);
        font-weight: var(--font-semi);
        font-size: 18px;
        margin-top: var(--mb-2)
    }

     .card .card-text{
        color: var(--black);
        font-weight: normal;
        font-size: 18px;
        /* line-height: 27px; */
        margin: none;
        padding: none;
        margin-bottom:var(--mb-4);

    }

    .card .btn-purplist{
        max-width:20rem;
        padding: 18px 56px;
        margin-bottom: var(--mb-5) !important;
        text-transform: capitalize;
        position: relative;
        border-radius: 8px;
        font-size: 14px;
        line-height: 24px;
        font-weight: normal;
        letter-spacing: 1px;
        color: var(--white);
        background: var(--purple);
        border-radius: 10px;
    }

    .card-body > p{
        color: var(--black);
        font-size: 18px;
        font-weight: normal;
        line-height: 27px;
    }

    .card-body > span{
        color: var(--black);
        font-size: 18px;
        font-weight: var(--font-semi);
        line-height: 27px;
    }

    @media only screen and (max-width: 768px) {
        .card{
            width: 100% !important;
            height: 100vh;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.15);
            padding-top: 2.7rem;
            padding-left:1.5rem;
        }

        .card .card-text{
            color: var(--black);
            font-weight: normal;
            font-size: 18px;
            margin: none;
            padding: 0 2% 0 0;
            margin-bottom:var(--mb-4);
        }
    }

    @media  screen  and (max-width: 950px) {
        .card{
            width: 70%;
        }
    }
</style>