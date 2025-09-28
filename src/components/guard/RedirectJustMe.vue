<script lang="ts" setup>
import { Role } from '../../composable/role/role.enum';
(() => {
    const selectedRole = localStorage.getItem("role");
    if (selectedRole) {
        switch (selectedRole) {
            case Role.COMPANY:
                window.location.href = "company";
                break
            case Role.DEVELOPER:
                window.location.href = "developer";
                break
            default:
                window.location.href = "company";
                break;
        }
        return;
    }
    window.location.href = "/it/onboarding";
})()

</script>
