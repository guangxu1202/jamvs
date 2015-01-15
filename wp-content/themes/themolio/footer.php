<?php
/**
 * @package Themolio
 */
?>
<?php global $themolio_options; ?>
    </div> <!-- End of content wrapper -->
</div> <!-- End of content -->
<footer id="footer" role="contentinfo">
    <div class="wrapper">
        <table class="tablayout"><tr>
        <td class="left">
            <?php if(trim($themolio_options['facebook_user']) != ''): ?>
            <a class="social-link" href="http://www.facebook.com/<?php echo $themolio_options['facebook_user']; ?>"><img src="<?php echo get_template_directory_uri(); ?>/images/social_facebook_icon.png"/></a>
            <?php endif; ?>
            <?php if(trim($themolio_options['twitter_user']) != ''): ?>
            <a class="social-link" href="http://www.twitter.com/<?php echo $themolio_options['twitter_user']; ?>"><img src="<?php echo get_template_directory_uri(); ?>/images/social_twitter_icon.png"/></a>
            <?php endif; ?>
            <?php if($themolio_options['enable_rss']): ?>
            <a class="social-link" href="<?php bloginfo('rss2_url'); ?>"><img src="<?php echo get_template_directory_uri(); ?>/images/social_rss_icon.png"/></a>
            <?php endif; ?>
        </td>
        <td class="right">
            <?php _e('Copyright &copy;','themolio'); ?> <?php bloginfo('name'); ?>
        </td>
        </tr></table>
    </div>
</footer>
<script language="javascript" type="text/javascript" src="http://js.users.51.la/7073770.js"></script>
<noscript><a href="http://www.51.la/?7073770" target="_blank"><img alt="&#x6211;&#x8981;&#x5566;&#x514D;&#x8D39;&#x7EDF;&#x8BA1;" src="http://img.users.51.la/7073770.asp" style="border:none" /></a></noscript>
<?php wp_footer(); ?>
</body>
</html>