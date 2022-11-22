<?php
/**
 * push
 *
 * @return void
 */
function push()
{
    shell_exec("git add --all");
    shell_exec("git commit -m 'update'");
    echo shell_exec('git push kenneth kenneth');
}
push();  