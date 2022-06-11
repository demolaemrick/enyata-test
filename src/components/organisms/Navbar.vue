<template>
  <nav class="navbar">
    <div class="navbar__col-1">
      <svg
        width="9"
        height="15"
        viewBox="0 0 9 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.28572 -0.00111404L6.36937e-07 7.2846L7.28571 14.5703L9 12.856L3.42857 7.2846L9 1.71317L7.28572 -0.00111404Z"
          fill="#A4A7B7"
        />
      </svg>
      <span>Back</span>
    </div>
    <div class="navbar__col-2">
      <svg
        class="notification-icon"
        width="16"
        height="20"
        viewBox="0 0 16 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14 14V9C14 5.93 12.37 3.36 9.5 2.68V2C9.5 1.17 8.83 0.5 8 0.5C7.17 0.5 6.5 1.17 6.5 2V2.68C3.64 3.36 2 5.92 2 9V14L0 16V17H16V16L14 14ZM8 20C9.1 20 10 19.1 10 18H6C6 19.1 6.9 20 8 20ZM4 15H12V9C12 6.52 10.49 4.5 8 4.5C5.51 4.5 4 6.52 4 9V15Z"
          fill="#333758"
        />
      </svg>
      <hr />
      <!-- avatar -->
      <div class="navbar__profile">
        <svg
          class="notification-icon"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 29.9998C6.7099 29.9998 0 23.2816 0 15C0 6.70967 6.70876 0 15 0C23.2903 0 29.9998 6.70876 29.9998 15C29.9998 23.2896 23.2809 29.9998 15 29.9998Z"
            fill="#66A9DF"
          />
          <path
            d="M15 0V29.9998C23.2809 29.9998 29.9998 23.2896 29.9998 15C29.9998 6.70898 23.2903 0 15 0Z"
            fill="#4F84CF"
          />
          <path
            d="M15 18.5156C10.6354 18.5156 6.47388 20.4236 3.4325 24.549C9.48894 31.8697 20.6993 31.8073 26.6741 24.4183C25.1987 22.9507 21.8756 18.5156 15 18.5156Z"
            fill="#D6F3FE"
          />
          <path
            d="M26.6741 24.4183C23.8534 27.9062 19.6211 29.9998 15 29.9998V18.5156C21.8758 18.5156 25.1987 22.9511 26.6741 24.4183Z"
            fill="#BDECFC"
          />
          <path
            d="M15 15.8789C12.0921 15.8789 9.72656 13.5132 9.72656 10.6055V8.84766C9.72656 5.93994 12.0921 3.57422 15 3.57422C17.9077 3.57422 20.2734 5.93994 20.2734 8.84766V10.6055C20.2734 13.5132 17.9077 15.8789 15 15.8789Z"
            fill="#D6F3FE"
          />
          <path
            d="M15 3.57422V15.8789C17.9079 15.8789 20.2734 13.5134 20.2734 10.6055V8.84766C20.2734 5.93971 17.9079 3.57422 15 3.57422Z"
            fill="#BDECFC"
          />
        </svg>
        <span>John Doe</span>
      </div>
      <!-- three dots -->
      <svg
        width="17"
        height="3"
        viewBox="0 0 17 3"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="1.5" cy="1.5" r="1.5" fill="#C4C4C4" />
        <circle cx="8.5" cy="1.5" r="1.5" fill="#C4C4C4" />
        <circle cx="15.5" cy="1.5" r="1.5" fill="#C4C4C4" />
      </svg>
    </div>
  </nav>
</template>
<script>
export default {};
</script>
<style>
.navbar,
.navbar__col-1,
.navbar__col-2,
.navbar__profile {
  display: flex;
  align-items: center;
}

.navbar {
  justify-content: space-between;
  background: #ffffff;
  box-shadow: 0px 2px 6px rgba(229, 229, 229, 0.3);
  width: 100%;
  height: 4rem;
  margin-bottom: 2.75rem;
  padding: 0 2.125rem;
  position: sticky;
  top: 0;
}

.navbar__col-1 {
  gap: 8px;
  color: #a4a7b7;
}
.navbar__col-2 {
  gap: 32px;
}
.navbar__col-2 hr {
  width: 25px;
  transform: rotate(90deg);
  border-color: #e5e5e5;
}
.navbar__profile {
  gap: 24px;
  margin-right: 27px;
}
.navbar__profile span {
  color: #303b54;
}
</style>
