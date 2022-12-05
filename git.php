<?php
/**
 * commit && push to Github
 *
 * @return void
 */
function push()
{
    $remote_name = 'kenneth';
    $branch_name = 'kenneth';
    shell_exec("git add --all");
    shell_exec("git commit -m 'update22'");
    echo shell_exec("git push $remote_name $branch_name");
}
push();  